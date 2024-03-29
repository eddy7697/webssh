GateOne.Base.superSandbox("GateOne.Terminal.Input", ["GateOne.Terminal", "GateOne.User", "GateOne.Input"], function(window, undefined) {
  "use strict";
  GateOne.Events.on("pentium-gateone-trigger", function (con, arg) {
    if (arg[0].match("Gate One server round-trip")) {
      connect()
    }
    if (arg[0].match("61.216.74.14")) {
      // log();
    }

  });
})

window.onload = function () {
  var params = urlParams();
  var titleExist = 'title' in params;
  var titleFix = ' - Pentium WebSSH';

  //document.title = titleExist ? params.title.concat(titleFix) : decodeURIComponent(params.ssh).split('@')[1].concat(titleFix);     

  GateOne.init({
    url: 'https://term.pentium.network',
    embedded: true,
    style: {'background-color': 'black'}
  });
}

function urlParams() {
  try {
    var search = location.search.substring(1);
    var params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

    return params;
  } catch (error) {
    return {};
  }        
}

/**
 * Terminal connection
 */  
function connect() {
  GateOne.SSH.connect('ssh://root@61.216.74.14:45003');
}

/**
 * Log
 */
function log() {
  $('#loading-bar').hide();
  console.log(GateOne.Terminal.terminals[1].created.getTime());
}
