import Head from 'next/head';
import WorkSection from '../components/WorkSection';
import EducationSection from '../components/EducationSection';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import SummarySection from '../components/Summary';
import resumeData from '../public/data.json'

export default function Home() {
	
	return (
		<>
			<Head>
				<title>ThienKQ Resume</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"
				></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"></link>
			</Head>

			<body>
				<Header basics={resumeData.basics}/>
				<div id="content" class="container">
					<ContactSection basics={resumeData.basics}/>
					<SummarySection basics={resumeData.basics}/>
					<WorkSection workList = {resumeData.work}/>
          <EducationSection eduList = {resumeData.education}/>
				</div>
			</body>
		</>
	);
}

export async function getStaticProps() {
  return {
    props: {
      resumeData: resumeData,
    }
  };
}
