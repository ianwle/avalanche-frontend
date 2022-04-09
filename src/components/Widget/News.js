import React from "react";
import { Column, Table2 } from "@blueprintjs/table";

/* Redux */
import { connect } from "react-redux";
import { H6 } from "@blueprintjs/core";
// import * as GeneralActions from "@/redux/actions/GeneralActions"

import axios from "axios";

class News extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const test = [
      {
          "source": {
              "id": null,
              "name": "Terra.com.br"
          },
          "author": "Estadão Conteúdo",
          "title": "Estadão transmite Brazil Conference; confira programação",
          "description": "Encontro reúnes pré-candidatos, pesquisadores e lideranças de diversos setores para discutir soluções para problemas do País",
          "url": "https://www.terra.com.br/noticias/estadao-transmite-brazil-conference-confira-programacao,315961a8a8f3444b92531c8d9b5299b7q0oljial.html",
          "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/628/middle/s1.trrsf.com/atm/3/core/_img/terra-logo-white-bg-v3.jpg",
          "publishedAt": "2022-04-08T21:06:12Z",
          "content": "A 8ª edição da Brazil Conference reúne neste sábado e domingo, 9 e 10, lideranças e pesquisadores de diversos setores para discutir a \"reinvenção brasileira\" em meio ao arrefecimento da pandemia e à … [+11477 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Jornaleconomico.pt"
          },
          "author": "Guilherme Bica",
          "title": "Peter Thiel diz que Buffett é o “inimigo número um” da Bitcoin e chama-lhe “avô sociopata de Omaha”",
          "description": "Thiel segurou uma foto de Buffett com as palavras \"veneno de rato\", referindo-se ao tempo em que o CEO da Berkshire descreveu a Bitcoin usando esta frase",
          "url": "https://jornaleconomico.pt/noticias/peter-thiel-diz-que-buffett-e-o-inimigo-numero-um-da-bitcoin-e-chama-lhe-avo-sociopata-de-omaha-876028",
          "urlToImage": "https://jornaleconomico.pt/wp-content/uploads/2016/11/peter-thiel.jpg",
          "publishedAt": "2022-04-08T21:00:57Z",
          "content": "O capitalista multimilionário Peter Thiel disse que Warren Buffett lidera uma “lista de inimigos” de pessoas que estão a tentar parar a criptomoeda.\r\n“Inimigo número um” e “avô sociopata de Omaha”, f… [+1756 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CryptoSlate"
          },
          "author": "Sponsored",
          "title": "Covesting March Review: 5,700% ROI Helps Fractalz Repeat Top Rank",
          "description": "A fractal is a repeating pattern often found all throughout nature. \nThe post Covesting March Review: 5,700% ROI Helps Fractalz Repeat Top Rank appeared first on CryptoSlate.",
          "url": "https://cryptoslate.com/covesting-march-review-5700-roi-helps-fractalz-repeat-top-rank/",
          "urlToImage": "https://cryptoslate.com/wp-content/uploads/2022/04/image-1-1.png",
          "publishedAt": "2022-04-08T21:00:41Z",
          "content": "Disclosure: This is a sponsored post. Readers should conduct further research prior to taking any actions. Learn more ›\r\nA fractal is a repeating pattern often found all throughout nature. It is only… [+5780 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "FX Empire"
          },
          "author": "Reuters",
          "title": "Speculators pare back net long U.S. dollar bets in latest week -CFTC, Reuters data",
          "description": "NEW YORK (Reuters) -   Speculators&#039; net long positioning on the U.S. dollar fell in the latest week, according to calculations by Reuters and U.S. Commodity Futures Trading Commission data released on Friday.",
          "url": "https://www.fxempire.com/news/article/speculators-pare-back-net-long-u-s-dollar-bets-in-latest-week-cftc-reuters-data-963859",
          "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/04/tagreuters.com2022newsml_LYNXNPEI3712J1.jpg",
          "publishedAt": "2022-04-08T20:53:28Z",
          "content": "The U.S. dollar positioning was derived from net contracts of International Monetary Market speculators in the Japanese yen, euro, British pound, Swiss franc, as well as Canadian and Australian dolla… [+2426 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Daily Mail"
          },
          "author": "Ronny Reyes",
          "title": "PayPal's Peter Thiel unloads on Warren Buffett, calling him 'the sociopathic grandpa from Omaha'",
          "description": "PayPal co-founder and billionaire Peter Thiel lashed out at Bitcoin critics Warren Buffett, Jamie Dimon and Larry Fink during his speech at the Bitcoin 2022 conference in Miami",
          "url": "https://www.dailymail.co.uk/news/article-10700513/PayPals-Peter-Thiel-unloads-Warren-Buffett-calling-sociopathic-grandpa-Omaha.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/08/19/56386413-0-image-a-6_1649441753436.jpg",
          "publishedAt": "2022-04-08T20:42:36Z",
          "content": "PayPal billionaire Peter Thiel slammed critics of Bitcoin, naming Warren Buffett 'enemy number one' and claiming critics of the cryptocurrency are old, left-leaning investors who run 'woke companies.… [+3151 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Criptonoticias.com"
          },
          "author": "Froilan Fernández",
          "title": "Las empresas que hace 10 años no querían saber sobre Bitcoin, hoy preguntan cómo invertir",
          "description": "Además de extender el alcance de la oferta actual de bitcoin a las instituciones, se requieren nuevos servicios para un crecimiento sostenido.\nLeer más",
          "url": "https://www.criptonoticias.com/mercados/empresas-hace-10-anos-no-querian-bitcoin-hoy-preguntan-invertir/",
          "urlToImage": "https://www.criptonoticias.com/wp-content/uploads/2022/03/bitcoin-empresa-1.png",
          "publishedAt": "2022-04-08T20:40:24Z",
          "content": "Hechos clave:\r\n<ul><li>Los fondos y las compañías que invierten en bitcoin abarcan un 8% del suministro de BTC.\r\n</li><li>Es posible lograr sinergias entre la inversión en bitcoin y las finanzas trad… [+6914 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CoinDesk"
          },
          "author": "Daniel Kuhn",
          "title": "The Meaning of Miami's Castrated Bitcoin Bull",
          "description": "\"[In] Miami we have big balls,\" Mayor Suarez said on CoinDesk TV, referring to the Bitcoin 2022 statue that lacks that anatomical part.",
          "url": "https://www.coindesk.com/layer2/2022/04/08/the-meaning-of-miamis-castrated-bitcoin-bull/",
          "urlToImage": "https://www.coindesk.com/resizer/QpEdQMX9gBbQYz5eAdnF4IVnrG0=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IIAIPZ54VZCJFJN47FETUJAYMQ.jpg",
          "publishedAt": "2022-04-08T20:40:13Z",
          "content": "Standing 11 feet tall and glistening in the southern sun, The Miami Bull statue has been called both a crime against god and pretty cool. The robotic reimagining of the Wall Street landmark is 3,000 … [+3491 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "BeInCrypto"
          },
          "author": "Eduardo Venegas",
          "title": "Mastercard presenta 15 solicitudes de patente para entrar al metaverso y lanzar NFT",
          "description": "Mastercard presentó su solicitud de patente ante la Oficina de Patentes y Marcas Registradas de Estados Unidos (USPTO, por sus siglas en inglés) para ofrecer productos relacionados con tokens no fungibles (NFT), metaverso, marketplaces, y comercio electrónico…",
          "url": "https://es.beincrypto.com/mastercard-presenta-15-solicitudes-patente-entrar-metaverso-lanzar-nft/",
          "urlToImage": "https://s32679.pcdn.co/wp-content/uploads/2020/11/BIC_pandemic_online_transaction_increase_mastercard.jpg.webp",
          "publishedAt": "2022-04-08T20:39:02Z",
          "content": "Mastercard anunció que lanzará más de 15 productos en el metaverso, los NFT formarán parte de la estrategia, no por separado; no obstante, no aclaró si diseñará una plataforma o si se sumará a un mar… [+3283 chars]"
      },
      {
          "source": {
              "id": "reuters",
              "name": "Reuters"
          },
          "author": null,
          "title": "Speculators pare back net long US dollar bets in latest week -CFTC, Reuters data - Reuters.com",
          "description": "Speculators' net long positioning on the U.S. dollar fell in the latest week, according to calculations by Reuters and U.S. Commodity Futures Trading Commission data released on Friday.",
          "url": "https://www.reuters.com/business/speculators-pare-back-net-long-us-dollar-bets-latest-week-cftc-reuters-data-2022-04-08/",
          "urlToImage": "https://www.reuters.com/resizer/b0XQ5C8zqI8is189HJDHQiumTms=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3CVQ6PG6GVLBDL4YTNECROMKKM.jpg",
          "publishedAt": "2022-04-08T20:38:00Z",
          "content": "NEW YORK, April 8 (Reuters) - Speculators' net long positioning on the U.S. dollar fell in the latest week, according to calculations by Reuters and U.S. Commodity Futures Trading Commission data rel… [+2205 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Blockworks.co"
          },
          "author": "Ben Strack",
          "title": "Issuers Race To Launch Short Bitcoin Futures ETFs",
          "description": "Direxion and AXS Investments follow suit after ProShares proposes ETF betting against bitcoin\nThe post Issuers Race To Launch Short Bitcoin Futures ETFs appeared first on Blockworks.",
          "url": "http://blockworks.co/issuers-race-to-launch-a-short-bitcoin-futures-etf/",
          "urlToImage": "https://blockworks.co/wp-content/uploads/2022/03/ETF.jpg",
          "publishedAt": "2022-04-08T20:37:39Z",
          "content": "<ul><li>Direxion originally filed to launch its Bitcoin Strategy Bear ETF in October but withdrew the application</li><li>AXS Investments Short Bitcoin Strategy fund would be the firms third ETF in t… [+2556 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Cryptopolitan"
          },
          "author": "Carisbel Guaramato",
          "title": "Robinhood enables wallets for states without crypto laws in 2022",
          "description": "TL;DR Breakdown • New York, Nevada, and Hawaii are off the list to sign up for Robinhood• The wallet will seek to associate with the BLN peer-to-peer payment network to […]",
          "url": "https://www.cryptopolitan.com/robinhood-enables-wallets/",
          "urlToImage": "https://cryptopolitanimg.s3.amazonaws.com/wp-content/uploads/2022/04/08181229/austin-distel-EMPZ7yRZoGw-unsplash.jpg",
          "publishedAt": "2022-04-08T20:37:20Z",
          "content": "TL;DR Breakdown\r\n New York, Nevada, and Hawaii are off the list to sign up for RobinhoodThe wallet will seek to associate with the BLN peer-to-peer payment network to improve its system\r\nRecently, th… [+2497 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Cointelegraph"
          },
          "author": "Turner Wright",
          "title": "Desciende el número de empresas británicas de criptomonedas que operan bajo el estatus de registro temporal de la FCA",
          "description": "La Autoridad de Conducta Financiera nombró a CEX.IO, Revolut, Copper, Globalblock y Moneybrain como empresas del espacio cripto autorizadas temporalmente para operar en el Reino Unido.\n \nEl número de empresas autorizadas a ofrecer servicios de criptomonedas a…",
          "url": "https://es.cointelegraph.com/news/number-of-uk-crypto-firms-operating-under-fca-temporary-registration-status-drops",
          "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDQvNTg0YzY4OTYtNTViMy00OTAzLWEzZDctNjQ2OGVlODBkMTJiLmpwZw==.jpg",
          "publishedAt": "2022-04-08T20:34:04Z",
          "content": "El número de empresas autorizadas a ofrecer servicios de criptomonedas a los residentes en el Reino Unido bajo el estatus de registro temporal de la Autoridad de Conducta Financiera se ha reducido de… [+2988 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Finance.ua"
          },
          "author": "Finance.UA",
          "title": "Неизвестные вывели из пяти кошельков Bitcoin, находившиеся \"без движения\" более 12 лет",
          "description": "8 апреля неизвестные вывели 150 BTC с трех кошельков, «спящих» с 2009 года. На серию транзакций обратил внимание сервис Whale Alert.",
          "url": "https://news.finance.ua/ru/neizvestnye-vyveli-iz-pyati-koshel-kov-bitcoin-nahodivshiesya-bez-dvizheniya-bolee-12-let",
          "urlToImage": "https://finance-news-media.fra1.cdn.digitaloceanspaces.com/prod/1/1/11868c99a9ac36a87bc69578d0bd54de",
          "publishedAt": "2022-04-08T20:33:00Z",
          "content": ""
      },
      {
          "source": {
              "id": null,
              "name": "Kiplinger's Personal Finance"
          },
          "author": "Karee Venema",
          "title": "Stock Market Today: Tech Stocks Lag as Treasury Yields Keep Rising",
          "description": "Tech stocks underperformed in today's session, much as they've done over the last few months.\nThe technology sector gave back 1.4% as the 10-year Treasury yield climbed 5.2 basis points (a basis point is one-one hundredth of a percentage point) to 2.71% – a l…",
          "url": "https://www.kiplinger.com/investing/stocks/604523/stock-market-today-040822-tech-stocks-lag-as-treasury-yields-keep-rising",
          "urlToImage": "https://mediacloud.kiplinger.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1649449000/Investing/stock-market-today-040822.jpg",
          "publishedAt": "2022-04-08T20:32:25Z",
          "content": "Tech stocks underperformed in today's session, much as they've done over the last few months.\r\nThe technology sector gave back 1.4% as the 10-year Treasury yield climbed 5.2 basis points (a basis poi… [+3676 chars]"
      },
      {
          "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
          },
          "author": "Walter Thompson",
          "title": "TechCrunch+ roundup: Psychedelic biotech, Gogoro’s SPAC, H-1Bs for Ukrainians",
          "description": "You may not have heard of Amadeus, but if you've taken a trip, you've probably interacted with its tech stack.",
          "url": "https://techcrunch.com/2022/04/08/techcrunch-roundup-psychedelic-biotech-gogoros-spac-h-1bs-for-ukrainians/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1343503244.jpg?w=602",
          "publishedAt": "2022-04-08T20:26:36Z",
          "content": "You may not have heard of Amadeus, but if you’ve taken a trip, you’ve probably interacted with its tech stack.\r\nLaunched in 1987, the company provides hundreds of transportation and hospitality provi… [+6198 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Yahoo Entertainment"
          },
          "author": "Damanick Dantes",
          "title": "Market Wrap: Cryptos Waver as Speculators Lose Interest",
          "description": "Bitcoin (BTC) and other cryptos were mixed on Friday while stocks traded flat. Open interest in the bitcoin futures market is starting to decline, which...",
          "url": "https://finance.yahoo.com/news/market-wrap-cryptos-waver-speculators-202327617.html",
          "urlToImage": "https://s.yimg.com/uu/api/res/1.2/sAPIeJshjnb64iqDttLPDw--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/604812367d4baa49b6ce2208e4f2d32a",
          "publishedAt": "2022-04-08T20:23:27Z",
          "content": "Don't miss CoinDesk's Consensus 2022, the must-attend crypto &amp; blockchain festival experience of the year in Austin, TX this June 9-12.\r\nCryptocurrencies were mixed Friday, although selling press… [+4259 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CoinDesk"
          },
          "author": "Damanick Dantes",
          "title": "Market Wrap: Cryptos Waver as Speculators Lose Interest",
          "description": "Bitcoin (BTC) and other cryptos were mixed on Friday while stocks traded flat. Open interest in the bitcoin futures market is starting to decline, which suggests uncertainty among traders about future price direction. Meanwhile, NEAR rose by 20% while WAVES d…",
          "url": "https://www.coindesk.com/markets/2022/04/08/market-wrap-cryptos-waver-as-speculators-lose-interest/",
          "urlToImage": "https://www.coindesk.com/resizer/g_XBAe_o9hz4UAmATsdk6bmUMCo=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/GCKUPC2F2FGH5DCNCTVX5K2VWY.png",
          "publishedAt": "2022-04-08T20:23:27Z",
          "content": "Cryptocurrencies were mixed Friday, although selling pressure from earlier in the week appeared to be gaining steam.\r\nBitcoin (BTC) traded lower after failing to break above $44,000 during the New Yo… [+4646 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CNBC"
          },
          "author": "Sharon Epperson",
          "title": "With 10 days until the tax-filing deadline, here's what last-minute filers need to know",
          "description": "The deadline for filing your taxes is fast approaching. Here is what last-minute filers need to know",
          "url": "https://www.cnbc.com/2022/04/08/what-last-minute-filers-need-to-know-with-10-days-till-taxes-are-due.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106883326-1621006957444-gettyimages-1282134863-3q4a6798.jpeg?v=1649360939&w=1920&h=1080",
          "publishedAt": "2022-04-08T20:19:01Z",
          "content": "If you're one of those procrastinators who still hasn't filed your taxes, you're not alone. About one-third of Americans wait until the very last minute. \r\nA survey from IPX 1031 finds the most commo… [+6398 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Bitcoin Magazine"
          },
          "author": "Shawn Amick",
          "title": "Senator Cynthia Lummis Outlines Forthcoming Bipartisan Bitcoin Bill",
          "description": "Wyoming Senator Cynthia Lummis shared details on a bipartisan bill designed to propel Bitcoin innovation in the U.S.",
          "url": "https://bitcoinmagazine.com/business/senator-lummis-details-new-bitcoin-bill",
          "urlToImage": "https://bitcoinmagazine.com/.image/t_share/MTg4NjQ2NzUwMTA0MzMyMDIw/senator-cynthia-lummis-outlines-forthcoming-bipartisan-bitcoin-bill-.jpg",
          "publishedAt": "2022-04-08T20:13:38Z",
          "content": "<ul><li>Marco Santori and Cynthia Lummis had a fireside chat at the Bitcoin 2022 conference to discuss evolving legislation on Bitcoin that Lummis has been working on.</li><li>Lummis was joined by Ma… [+4018 chars]"
      },
      {
          "source": {
              "id": "business-insider",
              "name": "Business Insider"
          },
          "author": "prosen@insider.com (Phil Rosen)",
          "title": "US stocks trade mixed to close a losing week as 10-year Treasury yield hits fresh 3-year high",
          "description": "US stocks closed out their worst week in a month, as investors weighed developments with Ukraine as well as hawkish Fed signals.",
          "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-federal-reserve-bonds-investors-hawkish-russia-2022-4",
          "urlToImage": "https://i.insider.com/62509099ee61990018dddb9f?width=1200&format=jpeg",
          "publishedAt": "2022-04-08T20:10:09Z",
          "content": "US stocks ended mixed on Friday to close out their worst week in a month. The 10-year Treasury yield climbed to its highest level in three years as investors react to a more aggressive approach signa… [+1564 chars]"
      }
  ];
    this.setState({
      news: test
    })
  }

  render() {
    return (
      <React.Fragment>
        <H6>News</H6>
        <div style={{maxHeight: "1000"}}>
        <Table2 numRows={500}>
          <Column />
          <Column />
          <Column />
      </Table2>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    generalState: state.GeneralState
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchPayload: (args) => {
      dispatch(args);
    }
    // toggleNewsSelected: () => {
    //   dispatch(GeneralActions.toggleNewsSelected())
    // }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
