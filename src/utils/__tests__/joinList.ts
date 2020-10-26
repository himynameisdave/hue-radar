import joinList from '../joinList';


describe('utils/joinList', () => {
  it('correctly joins the list', () => {
    const actual = joinList(['foo', 'bar', 'baz']);
    const expected = 'foo, bar, baz';
    expect(actual).toEqual(expected);
  });
});
