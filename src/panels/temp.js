		
		{fetchedUser &&
		<Group header={<Header mode="secondary">Our team:</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={mgoreev}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${"Марат"} ${"Гореев"}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={aalipov}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${"Андрей"} ${"Алипов"}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={alatishev}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${"Артём"} ${"Латышев"}`}
			</Cell>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={kmikolosiuk}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${"Екатерина"} ${"Миколосюк"}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">© 2021 Foobar team. All Rights Reserved</Header>}>
		</Group>