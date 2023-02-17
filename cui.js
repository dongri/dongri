'use strict';
const { h } = require('ink');
const SelectInput = require('ink-select-input');
const open = require('open');

const handleSelect = item => {
  if (item.url) {
		open(item.url, { wait: false });
  }
  if (item.action) {
		item.action();
  }
};

const items = [
  {
		label: 'Website',
		url: 'https://dongri.eth.limo'
  },
  {
		label: 'Blog',
		url: 'https://dongri.github.io'
  },
  {
		label: 'GitHub',
		url: 'https://github.com/dongri'
  },
  {
		label: 'Twitter',
		url: 'https://twitter.com/dongrify'
  },
  {
		label: 'Bye',
		action() {
			process.exit();
		}
  }
];

module.exports = () => (
  <div>
		<div>
			Dongri Jin
		</div>
		<SelectInput items={items} onSelect={handleSelect} />
  </div>
);
