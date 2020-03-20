const html = `<ul id="menu">
    <li><a href="https://linkedin.com/in/benhalverson">About</a></li>
    <li>
      <a href="#">Portfolio</a>
      <ul class="hidden">
        <li><a href="https://www.dropbox.com/sh/1es1fv6ewtzz1d5/AADqC1CZdOJQW4-EtmLRAv9ta?dl=0">Screenshots</a></li>
        <li><a href="https://github.com/benhalverson/react-image-search">Responsive Image Search Demo</a></li>
        <li><a href="https://github.com/benhalverson/coinbase-chart-react">Coinbase Chart Demo</a></li>
        <li><a href="https://github.com/nodejs/node/commit/88fb359c578b5d1a58885f3afcf6e542a9f07843">Node.js OpenSource Work</a></li>
        
      </ul>
    </li>
    <li><a href="mailto:benhalverson@me.com">Contact</a></li>
  </ul>`;

function strip(html) {
	let tmp = document.createElement('div');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText;
}

console.log(strip(html));
