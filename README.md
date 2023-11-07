# Stock-Vizualizer
[Visit this Project!](https://dann-lam.github.io/stock-viz/) 
Warning: Due to the nature of limited API calls, each click you do is an API call at the moment, so sadly you are limited to 5 moves before things break, an indicator call is an API call, changing time frames is an API call etc, however calling for congress information is free as it's actually reading and parsing a JSON file.

## Preview Videos
https://github.com/dann-lam/stock-viz/assets/15963035/2e479f14-94a3-496a-b4d6-44961f9fe339


https://github.com/dann-lam/stock-viz/assets/15963035/e2e426f5-f3d5-40c6-9808-fd14d9152505



https://github.com/dann-lam/stock-viz/assets/15963035/498cd3c3-e389-4d69-8a47-26c7ca708071

## Technology Used

| Technology Used |                        Resource URL                        |
| --------------- | :--------------------------------------------------------: |
| Git             |        [https://git-scm.com/](https://git-scm.com/)        |
| JS              | [https://www.javascript.com/](https://www.javascript.com/) |
| Node            |       [https://nodejs.org/en](https://nodejs.org/en)       |
| ChartJS         |    [https://www.chartjs.org/](https://www.chartjs.org/)    |
| React           |          [https://react.dev/](https://react.dev/)          |
| DayJS           |         [https://day.js.org/](https://day.js.org/)         |

## Description

This stock visualizer gives you basic controls to view a ticker or company and it's associated price action on a chart.

Two interesting features that makes it stand apart from other stock projects is the ability to visualize news stories associated with said ticker and company, seeing when that story was published, and corresponding it on the Chart.

The second interesting feature is the ability to see which Congressperson is trading on said stock.

Link to a video of the project doing a search for a ticker:
https://raw.githubusercontent.com/dann-lam/stock-viz/main/vid_clips/search.mp4

Link to a video of the project searching for news on a ticker.
https://raw.githubusercontent.com/dann-lam/stock-viz/main/vid_clips/search_news.mp4

Link to a video of the project searching for congress people who have bought or sold said ticker.
https://raw.githubusercontent.com/dann-lam/stock-viz/main/vid_clips/search_congress.mp4

This project has gone through a few reiterations and reworks.
Notably: Most of the state was using useContext before, which worked, but everything was switched over to prop drilling as practice. This has some benefits and sidegrades.

Todo: Implement useReducer as many of the states are co-dependent. Changing one state can have rippling effects to other states.

## Table of Contents

- [Usage](#usage)
- [Learning Points](#learning-points)
- [Credits](#credits)
- [License](#license)

## Usage

Install NPM, along with the associated packages, cd to client, and npm run start.

I do not provide API keys, there are three you will have to create, API links will be linked below.

The first thing you will see is an empty search box with a time interval from which you can decide which time range you wish to see your stocks.

Upon searching for said ticker, you'll be able to decide whether you wish to see additional news articles related to said stock, it will then create "bubbles" on the chart that correlate to each news article's publish date on the timeline.
Clickin on a bubble will link you to the news article.

The next button activates the ability to display congress people who have traded this stock.
The time is limited to 2019-2023, it is not actively updated and is simply being read from a JSON file at the moment.
There are services that allow more real time searched via an API, but they're all quite costly, so we have a temporary solution here.

## Learning Points

This was primarily a way for me to learn how to use ChartJS, and to get some good practice using React with semi-complex state management. The project itself was an enjoyable challenge, with many new features learned and re-learned.

There's still quite a bit to fix with this project, it's nowhere near complete, but in its current state the primary features work perfectly.

## Credits

Thanks, Bed.

react-colorful
react-color-modal
react-chartjs-2

APIs:
https://www.alphavantage.co/documentation/

## License

MIT License
