import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="./profilepic.jpeg" alt="" />;
}

function Intro() {
	return (
		<div>
			<h1>Ankith Swaraj</h1>
			<p>
				Something Something something Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Sit accusamus quos, consectetur pariatur odio officia
				atque molestias maxime iure est necessitatibus maiores nam nisi numquam
				deleniti quam fuga, recusandae quidem.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill color={skill.color} level={skill.level} skill={skill.skill} />
			))}
		</div>
	);
}

function Skill({ skill, color, level }) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "😭"}
				{level === "advanced" && "👍"}
				{level === "intermediate" && "🏆"}
			</span>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
