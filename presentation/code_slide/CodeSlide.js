const React = require('react');
const {PropTypes, Children} = React;

const {Slide,Text} = require('spectacle');
const CodeSlideTitle = require('./CodeSlideTitle');
const CodeSlideNote = require('./CodeSlideNote');
const shallowCompare = require('react-addons-shallow-compare');
const clamp = require('lodash.clamp');
const padStart = require('lodash.padstart');
const getHighlightedCodeLines = require('./getHighlightedCodeLines');
const calculateScrollCenter = require('./calculateScrollCenter');
const scrollToElement = require('./scrollToElement');

function startOrEnd( index, loc ) {
    if ( index === loc[0] ) {
        return 'start';
    } else if ( index - 1 === loc[1] ) {
        return 'end';
    } else {
        return null;
    }
}

function calculateOpacity( index, loc ) {
    return (loc[0] <= index && loc[1] > index) ? 1 : 0.2;
}

function getLineNumber( index ) {
    return '<span class="token comment">' + padStart(index + 1, 3) + '.</span> ';
}

const style = {
    position: 'relative',
    textAlign: 'left',
    overflow: 'hidden',
    color: 'white',
    height: '700px',
    margin: 0,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    fontSize: '.8rem'
};

class CodeSlide extends React.Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        ranges: PropTypes.arrayOf(PropTypes.shape({
            loc: PropTypes.arrayOf(PropTypes.number).isRequired,
            title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
            note: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
        }))
    };

    state = {
        active: this.getStorageItem() || 0
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('storage', this.onStorage);
        window.addEventListener('resize', this.onResize);
        this.scrollActiveIntoView(true);

        requestAnimationFrame(() => {
            this.scrollActiveIntoView(true);
        });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        return shallowCompare(this, nextProps, nextState);
    }

    componentWillMount() {
        this.setState({ lines: this.generateLinesFromCode(this.props) });
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({ lines: this.generateLinesFromCode(nextProps) });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('storage', this.onStorage);
        window.removeEventListener('resize', this.onResize);
    }

    generateLinesFromCode( props ) {
        const {code, lang} = props;
        return getHighlightedCodeLines(code, lang);
    }

    getStorageId() {
        return 'code-slide:' + this.props.slideIndex;
    }

    getStorageItem() {
        return +localStorage.getItem(this.getStorageId());
    }

    setStorageItem( value ) {
        return localStorage.setItem(this.getStorageId(), '' + value);
    }

    goTo( active, skipLocalStorage ) {
        this.setState({ active }, this.scrollActiveIntoView);
        if ( !skipLocalStorage ) {
            this.setStorageItem(active);
        }
    }

    scrollActiveIntoView = ( skipAnimation ) => {
        const {container, start, end} = this.refs;
        const scrollTo = calculateScrollCenter(start, end, container);
        scrollToElement(container, 0, scrollTo, {
            duration: skipAnimation ? 1 : 1000
        });
    };

    onResize = () => {
        this.scrollActiveIntoView(true);
    };

    onKeyDown = e => {
        //if ( this.props.slideIndex !== parseInt(this.props.route.slide) ) {
        //    return;
        //}

        let prev = this.state.active;
        let active = null;

        if ( e.which === 38 ) {
            active = prev - 1;
        } else if ( e.which === 40 ) {
            active = prev + 1;
        }

        if ( active !== null ) {
            e.preventDefault();
            active = clamp(active, 0, this.props.ranges.length - 1);
            this.goTo(active);
        }
    };

    onStorage = e => {
        if ( e.key === this.getStorageId() ) {
            this.goTo(+e.newValue, true);
        }
    };

    render() {
        const {code, lang, ranges} = this.props;
        const {active,lines} = this.state;

        const range = ranges[active] || {};
        const loc = range.loc || [];

        const lineEls = lines.map(( line, index ) => {
            return <div
            key={index}
            ref={startOrEnd(index, loc)}
            dangerouslySetInnerHTML={{ __html: getLineNumber(index) + line }}
            style={{ opacity: calculateOpacity(index, loc) }}/>;
        });

        return (
        <pre ref="container" style={style}>
          <code>{lineEls}</code>
        </pre>
        );
    }
}

module.exports = CodeSlide;
