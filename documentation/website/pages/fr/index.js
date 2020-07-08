/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = (props) => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = (props) => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = (props) => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = (props) => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo
                    img_src={`${baseUrl}img/illu-product-payment-solution.svg`}
                />
                <div className="inner">
                    <ProjectTitle
                        tagline={siteConfig.tagline}
                        title={siteConfig.title}
                    />
                    <PromoSection>
                        <Button href="#try">Get Started</Button>
                        <Button href={docUrl('start-sdk.html')}>
                            Learn Basics
                        </Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;

        const Block = (props) => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}
            >
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const BlockCode = (props) => (
            <Container id={props.id} background={props.background}>
                <GridBlock
                    align="left"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const TryOut = () => (
            <BlockCode id="try" background="light" gridBlockAlign="left">
                {[
                    {
                        content:
                            'Notre SDK est hébergé sur NPM, vous pouvez donc simplement utiliser : \n' +
                            '```sh\n' +
                            'npm i paygreen-node --save\n' +
                            '```\n',
                        title: 'Démarrer',
                    },
                ]}
            </BlockCode>
        );

        const Github = () => (
            <BlockCode gridBlockAlign="left">
                {[
                    {
                        content:
                            "Vous pouvez consulter notre répertoire [`ici`](#). N'hésitez pas à contacter tech@paygreen.fr (ou à créer un [`Issue`](#) sur GitHub) pour toutes questions. </br>Pour plus d'informations sur l'API PayGreen, veuillez visiter [`la documentation officielle de l'API`](https://paygreen.fr/documentation/api-documentation-categorie?cat=paiement).",
                        title: 'Répertoire GitHub',
                    },
                ]}
            </BlockCode>
        );

        const Features = (props) => (
            <Block layout="fourColumn" background={props.background}>
                {[
                    {
                        content:
                            "Des méthodes simples pour toutes les possibilités qu'offre l'API PayGreen.",
                        image: `${baseUrl}img/leaf.svg`,
                        imageAlign: 'top',
                        title: 'Appels API simplifiés',
                    },
                    {
                        content:
                            'Générer vos données rapidement et en toute sécurité pour vos appels API Post/Put.',
                        image: `${baseUrl}img/leaf.svg`,
                        imageAlign: 'top',
                        title: 'Modèles de construction de données',
                    },
                    {
                        content:
                            "Manipulez et convertisez les données en provenance de l'API.",
                        image: `${baseUrl}img/leaf.svg`,
                        imageAlign: 'top',
                        title: 'Outils additionnels',
                    },
                ]}
            </Block>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <div className="featuresBlock">
                        <Features />
                    </div>
                    <TryOut />
                    <Github />
                </div>
            </div>
        );
    }
}

module.exports = Index;
