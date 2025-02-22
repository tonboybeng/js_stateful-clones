'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const stateCopy = { ...state };
  const stateHistory = [];

  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(stateCopy, actions[i].extraData);
        break;
      case 'removeProperties':
        for (const j in actions[i].keysToRemove) {
          delete stateCopy[actions[i].keysToRemove[j]];
        }
        break;
      case 'clear':
        for (const k in stateCopy) {
          delete stateCopy[k];
        }
        break;
      default:
        break;
    }

    const stateCopyToPush = { ...stateCopy };

    stateHistory.push(stateCopyToPush);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
