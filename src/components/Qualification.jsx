import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { qualifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const QualificationCard = ({ qualification }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: "#1d1836",
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={qualification.date}
        iconStyle={{ background: qualification.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={qualification.icon}
                    alt={qualification.institution}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }>
        <div>
            <h3 className="text-white text-[24px] font-bold">{qualification.title}</h3>
            <h3 className="text-white text-[15px] font-bold mb-2">{qualification.major}</h3>
            <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}>
                {qualification.institution}
            </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {qualification.points.map((point, index) => (
                <li
                    key={`qualification-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Qualification = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Education Background</p>
                <h2 className={styles.sectionHeadText}>Qualifications</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {qualifications.map((qualification, index) => (
                        <QualificationCard key={index} qualification={qualification} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Qualification, "qualification");
