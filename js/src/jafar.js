'use strict';

(function (exports) {
  exports.Jafar = function () {
    occupation = "Royal Vizier";
    desires = ["To Overthrow The Sultan", "To Rule The Universe", "To Exact Revenge On Aladdin"];

    function showOccupation() {
      return occupation
    }

    function revealDeepestDesire() {
      return desires
    }

    function overThrowSultan() {
      return "Failed";
    };

    return {
      showOccupation: showOccupation,
      revealDeepestDesire: revealDeepestDesire,
      overThrowSultan: overThrowSultan
    };

    var occupation, desires;
  };
})(this);