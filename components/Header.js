const Header = ({ basics }) => (
	<header id="header">
		<div class="container">
			<div class="row">
				<div class="col-sm-9 col-sm-push-3">
					<h1>{basics.name}</h1>
					<h2>{basics.label}</h2>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
