const ContactSection = ({ basics }) => (
	<section id="contact" class="row">
		<aside class="col-sm-3">
			<h3>Contact</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
				<div class="col-sm-6">
					<strong>Email</strong>
					<div class="email">{basics.email}</div>
				</div>
				<div class="col-sm-6">
					<strong>Phone</strong>
					<div class="phone">
						<div class="phone">{basics.phone}</div>
					</div>
				</div>
				<div class="col-sm-6">
					<strong>Location</strong>
					<div class="phone">
						<div class="phone">{basics.location.city}</div>
					</div>
				</div>
				<div class="col-sm-6">
					<strong>Website</strong>
					<div class="website">
						<a href="">{basics.url}</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default ContactSection;
