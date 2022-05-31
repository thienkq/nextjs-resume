const SummarySection = ({ basics }) => (
	<section id="about" class="row">
		<aside class="col-sm-3">
			<h3>About</h3>
		</aside>
		<div class="col-sm-9">
			<p>{basics.summary}</p>
		</div>
	</section>
);

export default SummarySection;
