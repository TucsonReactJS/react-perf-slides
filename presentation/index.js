// Import React
import React from "react";

// Import Spectacle Core tags
import {
Appear,
BlockQuote,
Cite,
CodePane,
Deck,
Fill,
Heading,
Image,
Layout,
Link,
ListItem,
List,
Markdown,
Quote,
Slide,
Spectacle,
Text
} from "spectacle";

import CodeSlide from './code_slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    cactus: require("../assets/ReactCactus.svg"),
    me: require("../assets/me.png"),
    perfTool: require("../assets/perf_tool.png"),
    markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
    primary: "#32475D"
});

export default class Presentation extends React.Component {
    render() {
        return (
        <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Image src={images.cactus} margin="0px auto 40px" height="293px"/>
                    <Heading size={1} caps fit>
                        Tucson ReactJS
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Heading caps size={1} textColor="tertiary">
                            Agenda
                        </Heading>
                    </Fill>
                    <Fill>
                        <List>
                            <Appear><ListItem textColor="tertiary">ReactJS Performance</ListItem></Appear>
                            <Appear><ListItem textColor="tertiary">React Web Animation</ListItem></Appear>
                            <Appear><ListItem textColor="tertiary">Redux Videos Pt. 2</ListItem></Appear>
                        </List>
                    </Fill>
                </Slide>
                <Slide transition={["zoom", "fade"]} bgColor="primary"
                       notes="<ul><li>talk about that</li><li>and that</li></ul>">
                    <Image src={images.me} margin="0px auto 40px" height="293px"/>
                    <Text caps size={1} textColor="tertiary">Charles King</Text>
                    <Link href="http://twitter.com/thebringking" textColor="tertiary" size={1}>@TheBringKing</Link>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Text caps size={1} textColor="tertiary">
                            ReactJS Performance: Building a Color Viewer
                        </Text>
                    </Fill>
                    <Fill>
                        <Image src={images.perfTool} margin="40px auto 40px" height="293px"/>
                    </Fill>
                </Slide>
                <CodeSlide
                bgColor="primary"
                transition={[]}
                lang="js"
                code={require("raw!../assets/step_1.example")}
                ranges={[
                  { loc: [116, 144] },
                  { loc: [119, 120]},
                  { loc: [120, 121]},
                  { loc: [121, 122]},
                  { loc: [124, 136]},
                  { loc: [136, 141]},
                  { loc: [141, 142]},
            ]}/>
                <Slide transition={["slide"]} bgDarken={0.75}>
                    <Appear fid="1">
                        <Heading size={1} caps fit textColor="primary">
                            Full Width
                        </Heading>
                    </Appear>
                    <Appear fid="2">
                        <Heading size={1} caps fit textColor="tertiary">
                            Adjustable Darkness
                        </Heading>
                    </Appear>
                    <Appear fid="3">
                        <Heading size={1} caps fit textColor="primary">
                            Background Imagery
                        </Heading>
                    </Appear>
                </Slide>
                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading caps fit>Flexible Layouts</Heading>
                    <Layout>
                        <Fill>
                            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                Left
                            </Heading>
                        </Fill>
                        <Fill>
                            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                Right
                            </Heading>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide transition={["slide"]} bgColor="black">
                    <BlockQuote>
                        <Quote>Wonderfully formatted quotes</Quote>
                        <Cite>Ken Wheeler</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                    <Heading caps fit size={1} textColor="primary">
                        Inline Markdown
                    </Heading>
                    <Markdown>
                        {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
                    </Markdown>
                </Slide>
                <Slide transition={["slide", "spin"]} bgColor="primary">
                    <Heading caps fit size={1} textColor="tertiary">
                        Smooth
                    </Heading>
                    <Heading caps fit size={1} textColor="secondary">
                        Combinable Transitions
                    </Heading>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <List>
                        <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                        <Appear><ListItem>Autofit text</ListItem></Appear>
                        <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                        <Appear><ListItem>React-Router navigation</ListItem></Appear>
                        <Appear><ListItem>PDF export</ListItem></Appear>
                        <Appear><ListItem>And...</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={1} caps fit textColor="tertiary">
                        Your presentations are interactive
                    </Heading>
                    <Interactive/>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                        Made with love in Seattle by
                    </Heading>
                    <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
                </Slide>
            </Deck>
        </Spectacle>
        );
    }
}
