import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, PanelHeaderClose } from '@vkontakte/vkui';
import './main.css';
import mgoreev from '../img/mgoreev.jpg'
import aalipov from '../img/aalipov.jpg'
import alatishev from '../img/alatishev.jpg'
import kmikolosiuk from '../img/kmikolosiuk.jpg'

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
				<Button className="button" stretched size="l" mode="secondary" onClick={go} data-to="persik">Contact Us</Button>
        </PanelHeader>
		<div className="header">
			<div className="header-text">
				<h2>Foobar team</h2>
				<h3>Your dreamteam is right here</h3>
			</div>
			<div className="us">
				<div className="quotes-block">
					<div className="comment-title">
                        <div className="comment-title-person">
						<div className="comment-picture gmarat"></div>
                            <div className="comment-profile">
                                <span className="comment-name">Goreev Marat</span>
                                <span className="comment-name-desc">Frontend-developer</span>
                            </div>
                        </div>
                    </div>
                    <span>“I'm fond of creating sites, especially their front”</span>
                    <span class="comment-desc">May 22, 2021</span>
				</div>
				<div className="quotes-block">
					<div className="comment-title">
                        <div className="comment-title-person">
						<div className="comment-picture aalipov"></div>
                            <div className="comment-profile">
                                <span className="comment-name">Andrei Alipov</span>
                                <span className="comment-name-desc">Backend-developer</span>
                            </div>
                        </div>
                    </div>
                    <span>“I'm fond of creating sites, especially their back”</span>
                    <span class="comment-desc">May 22, 2021</span>
				</div>
				<div className="quotes-block">
					<div className="comment-title">
                        <div className="comment-title-person">
						<div className="comment-picture alatishev"></div>
                            <div className="comment-profile">
                                <span className="comment-name">Artem Latishev</span>
                                <span className="comment-name-desc">Frontend-developer</span>
                            </div>
                        </div>
                    </div>
                    <span>“You are the CSS to my HTML”</span>
                    <span class="comment-desc">May 22, 2021</span>
				</div>
				<div className="quotes-block">
					<div className="comment-title">
                        <div className="comment-title-person">
						<div className="comment-picture kmikolosyuk"></div>
                            <div className="comment-profile">
                                <span className="comment-name">Ekaterina Mikolosyuk</span>
                                <span className="comment-name-desc">C++ developer</span>
                            </div>
                        </div>
                    </div>
                    <span>“In my opinion, C++ is the best programming language in the world”</span>
                    <span class="comment-desc">May 22, 2021</span>
				</div>
			</div>
		</div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
