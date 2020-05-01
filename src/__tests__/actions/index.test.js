import * as actions from './../../actions';

describe('barrel actions', () => {
  it('deleteBarrel should create DELETE_BARREL action', () => {
    expect(actions.deleteBarrel(1)).toEqual({
      type: 'DELETE_BARREL',
      id: 1
    });
  });
});
