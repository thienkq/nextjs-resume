const WorkSection = ({workList}) => (
	<section id="work" class="row">
		<aside class="col-sm-3">
			<h3>Work</h3>
		</aside>

		<div class="col-sm-9">
			<div class="row">
				{workList.map((w) => (
					<div class="col-sm-12">
						<h4 class="strike-through">
							<span></span>
							<span class="date">
								{w.startDate} — {w.endDate}
							</span>
						</h4>
						<div class="website pull-right">
							<a href="">{w.name}</a>
						</div>
						<div class="position">{w.position}</div>
						<div class="summary">
							<div>{w.summary}</div>
						</div>
						<h5>
							<b>Details</b>
						</h5>
						<ul class="highlights">
							{w.highlights.map((dt) => (
								<li class="bullet">{dt}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default WorkSection;
