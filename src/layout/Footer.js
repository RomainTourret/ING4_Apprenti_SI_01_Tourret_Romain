import React from 'react';

const styles = {
	footer: {
		height: 30,
		backgroundColor: 'rgba(255,255,255,.3)',
		flexShrink: 0
	},
};

const Footer = () => (
	<footer className="app-footer" style={styles.footer}>
		You don't want to know what's there
	</footer>
);

export default Footer;
