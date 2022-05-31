import Head from 'next/head';

export default function Home() {
	const resumeData = {
		basics: {
			name: 'Kieu Quang Thien',
			label: 'Engineering Things',
			image: '',
			email: 'thienkq@gmail.com',
			phone: '0934.433.505',
			url: 'https://github.com',
			summary: 'A summary of Thien…',
			location: {
				address: '2712 Broadway St',
				postalCode: 'CA 94115',
				city: 'San Francisco',
				countryCode: 'US',
				region: 'California',
			},
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
				name: 'Company',
				position: 'President',
				url: 'https://company.com',
				startDate: '2013-01-01',
				endDate: '2014-01-01',
				summary: 'Description…',
				highlights: ['Started the company'],
			},
		],
	};
	return (
		<div className="container">
			<Head>
				<title>Resume</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
								<strong>Website</strong>
								<div class="website">
									<a href="">{resumeData.basics.url}</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
      
		</div>
	);
}
