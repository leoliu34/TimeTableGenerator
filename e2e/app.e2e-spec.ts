import { TimeTableGeneratorPage } from './app.po';

describe('time-table-generator App', function() {
  let page: TimeTableGeneratorPage;

  beforeEach(() => {
    page = new TimeTableGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
