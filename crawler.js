const { parse } = require("date-fns");
const pup = require("puppeteer");
const { ptBR } = require("date-fns/locale");

const url = "https://www.youtube.com/";
const searchFor = "@DerrotandoFilmes";

(async () => {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(`${url}${searchFor}/videos`);

  let links = [];

  const videosCount = await page.$eval("#videos-count > span", (element) => {
    return element.innerText;
  });

  // função de scroll para carregar todos os videos
  while (links.length < videosCount) {
    await page.mouse.wheel({ deltaY: 5000 });

    const colectedLinks = await page.$$eval(
      "#thumbnail > :nth-child(1) > a",
      (el) => el.map((link) => link.href)
    );

    links = colectedLinks.map((url) => {
      return {
        url,
      };
    });
  }

  console.log(links.length);

  const viewsList = [];

  for (const link of links) {
    await page.goto(link.url);

    await page.waitForSelector("#description-inline-expander > #expand");
    await page.click("#description-inline-expander > #expand");

    const views = await page.$eval(
      "#info-container > #info > span",
      (element) => {
        return element.innerText;
      }
    );

    const title = await page.$eval(
      "#title > h1 > yt-formatted-string",
      (element) => {
        return element.innerText;
      }
    );

    const date = await page.$eval(
      "#info-container > #info > :nth-child(3)",
      (element) => {
        return element.innerText;
      }
    );

    const crawlerObject = {
      url: link.url,
      title,
      date: parse(date, "dd 'de' MMM'.' 'de' yyyy", new Date(), {
        locale: ptBR,
      }),
      views: views.split(" ")[0].replaceAll(".", ""),
    };

    viewsList.push(crawlerObject);
  }

  await browser.close();
})();
