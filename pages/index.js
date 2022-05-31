import Head from 'next/head';

export default function Home() {
	const resumeData = {
		basics: {
			name: 'Kieu Quang Thien',
			label: 'Engineering Things',
			image: '',
			email: 'thienkq@gmail.com',
			phone: '0934.433.505',
			url: 'https://www.linkedin.com/in/thien-kieu-quang-22860534/',
			location: {
				address: '',
				city: 'Hanoi',
				countryCode: 'VN',
			},
			summary:
				'My objective is to lead engineers and technical leaders to perform at their highest levels, by inspiring vision, developing a culture that makes everyone want to work together, serving and empowering every team member.',
			profiles: [
				{
					network: 'Linkedin',
					username: 'thienkq',
					url: 'https://www.linkedin.com/in/thien-kieu-quang-22860534/',
				},
			],
		},
		work: [
			{
				name: 'KiotViet',
				position: 'Engineering Manager',
				url: 'https://company.com',
				startDate: '2019',
				endDate: '2022',
				summary: `Lead a cross-functional team of 30-40 members, including the tech leaders that are responsible for technical solutions in the team.
        `,
				highlights: [
					'Identify and proactively tackle future issues and manage breakdowns that block team objectives.',
					'Deliver well-scoped programs of work that meet their goals, on time. Improving product quality by decreasing production issues 50% with a half the number of engineers over the last year.',
					'Adopt the ATDD practice in the team development process to increase effectiveness and efficiency.',
					'Provide strategic support to engineers to help them build the career they want. Empower five engineers from middle to senior level in a year.',
					'Build a career path framework for engineering roles in the development teams.',
				],
			},
		],
	};
	return (
		<>
			<Head>
				<title>Resume</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"
				></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"></link>
			</Head>
			<body>
				<header id="header">
					<div class="container">
						<div class="row">
							<div class="col-sm-9 col-sm-push-3">
								<h1>{resumeData.basics.name}</h1>
								<h2>{resumeData.basics.label}</h2>
							</div>
						</div>
					</div>
				</header>
				<div id="content" class="container">
					<section id="contact" class="row">
						<aside class="col-sm-3">
							<h3>Contact</h3>
						</aside>
						<div class="col-sm-9">
							<div class="row">
								<div class="col-sm-6">
									<strong>Email</strong>
									<div class="email">{resumeData.basics.email}</div>
								</div>
								<div class="col-sm-6">
									<strong>Phone</strong>
									<div class="phone">
										<div class="phone">{resumeData.basics.phone}</div>
									</div>
								</div>
								<div class="col-sm-6">
									<strong>Location</strong>
									<div class="phone">
										<div class="phone">{resumeData.basics.location.city}</div>
									</div>
								</div>
								<div class="col-sm-6">
									<strong>Website</strong>
									<div class="website">
										<a href="">{resumeData.basics.url}</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="about" class="row">
						<aside class="col-sm-3">
							<h3>About</h3>
						</aside>
						<div class="col-sm-9">
							<p>{resumeData.basics.summary}</p>
						</div>
					</section>
					<section id="work" class="row">
						<aside class="col-sm-3">
							<h3>Work</h3>
						</aside>

						<div class="col-sm-9">
							<div class="row">
								{resumeData.work.map((w) => (
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
										<h5><b>Details</b></h5>
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
				</div>
			</body>
		</>
	);
}
