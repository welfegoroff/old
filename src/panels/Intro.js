import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Intro.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Contact us
		</PanelHeader>
		<div class="area">
			<div className="area-img"></div>
			<div className="area-text">
				<h3>WANT TO CONTACT US?</h3>
				<h2>LEAVE YOUR EMAIL</h2>
				<p>In order contact us, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about how we can get in touch. We don’t spam.</p>
				<form class="neon_border">
					<div class="form-item">
						<input className="form-item-textarea" type="textarea"></input>
						<input className="form-item-submit" type="submit" value="Send email"></input>
					</div>
				</form>
			</div>
		</div>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
