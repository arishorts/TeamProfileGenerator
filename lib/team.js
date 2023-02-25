const _team = new WeakMap();

class Team {
  constructor() {
    _team.set(this, []);
  }
  peek() {
    const team = _team.get(this);
    if (team.length === 0) throw new Error("There are no items");
    return team[team.length - 1];
  }
  pop() {
    if (_team.get(this).length === 0) throw new Error("There are no items");
    return _team.get(this).pop();
  }
  push(obj) {
    _team.get(this).push(obj);
  }
  get count() {
    return _team.get(this).length;
  }
}

module.exports = Team;
