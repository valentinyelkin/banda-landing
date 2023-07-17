export const checkBrowser = (): { name: string; version: string } => {
  const ua = navigator.userAgent;
  let Match =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];
  let tem;

  if (/trident/i.test(Match[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: tem[1] || '' };
  }

  if (Match[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: 'Opera', version: tem[1] };
    }
  }

  Match = Match[2]
    ? [Match[1], Match[2]]
    : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);

  if (tem != null) {
    Match.splice(1, 1, tem[1]);
  }

  return {
    name: Match[0],
    version: Match[1],
  };
};
