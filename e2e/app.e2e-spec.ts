import { WeatherForChromePage } from './app.po';

describe('weather-for-chrome App', function() {
  let page: WeatherForChromePage;

  beforeEach(() => {
    page = new WeatherForChromePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
