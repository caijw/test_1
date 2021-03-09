
function handleMsg(e) {
  if (e.source == parent) {
    parent.postMessage(e.data)
  }
}

window.addEventListener('message', handleMsg)