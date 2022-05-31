import styles from '../styles/education.module.css'

const EducationSection = ({eduList}) => (
	<section id="education" class="row">
		<aside class="col-sm-3">
			<h3>Education</h3>
		</aside>
		<div class="col-sm-9">
			<div class="row">
            {eduList.map((edu) => (
                <div class="col-sm-12">
				<h4 class="strike-through">
					<span>{edu.institution}</span>
					<span class="date">
						{edu.startDate} - {edu.endDate}
					</span>
				</h4>
				<div className={styles.educationArea}>
					{edu.area}
				</div>
				<div className={styles.educationStudyStyle}>
					{edu.studyType} - GPA: {edu.score}
				</div>
			</div>
            ))}
			</div>
		</div>
	</section>
);

export default EducationSection;
