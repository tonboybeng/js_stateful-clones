'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const newState = { ...state };
  const stateHistory = [];

  for (const i in actions) {
    if (actions[i].type === 'addProperties') {
      Object.assign(newState, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      for (const j in actions[i].keysToRemove) {
        delete newState[actions[i].keysToRemove[j]];
      }
    }

    if (actions[i].type === 'clear') {
      for (const k in newState) {
        delete newState[k];
      }
    }

    const newStateToPush = { ...newState };

    stateHistory.push(newStateToPush);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
