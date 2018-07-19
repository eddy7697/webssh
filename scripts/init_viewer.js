GateOne.Base.superSandbox("GateOne.Terminal.Input", ["GateOne.Terminal", "GateOne.User", "GateOne.Input"], function(window, undefined) {
  "use strict";
  GateOne.Events.on("pentium-gateone-trigger", function (con, arg) {
    if (arg[0].match("Gate One server round-trip")) {
      $('#loading-bar').hide();
      GateOne.TermLogging.loadLogs();
    } else if(arg[0].match("Log listing complete")) {
      // console.log(urlParams());
      // console.log(GateOne.TermLogging.serverLogs);
    } else {
      console.log('other trigger')
    }
    // console.log(arg[0].match("Gate One server round-trip"));
    // GateOne.TermLogging.loadLogs();
  });
});      

function urlParams() {
  try {
    var search = location.search.substring(1);
    var params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

    return params;
  } catch (error) {
    return {};
  }        
}

window.onload = function () {
  GateOne.init({
    url: 'https://192.168.56.101',
    embedded: true,
    style: {'background-color': 'black'}
  });
}