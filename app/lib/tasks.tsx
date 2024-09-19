interface Task {
  id: string;
  title: string;
  desc: string;
  star: boolean;
  start: string;
  end: string;
  status: boolean;
}

const tasks: Task[] = [
  {
    id: "0",
    title: "Exercise",
    desc: "Need to do some pushups, sit ups, and plank",
    star: true,
    start: "03-April-2024",
    end: "05-April-2024",
    status: true,
  },
  {
    id: "1",
    title: "Study TypeScript",
    desc: "Review TypeScript concepts, interfaces, and generics",
    star: false,
    start: "04-April-2024",
    end: "06-April-2024",
    status: false,
  },
  {
    id: "2",
    title: "Work on Project",
    desc: "Finish the React project and submit the final report",
    star: true,
    start: "05-April-2024",
    end: "07-April-2024",
    status: false,
  },
  {
    id: "3",
    title: "Work on Project",
    desc: "Finish the React project and submit the final report",
    star: true,
    start: "05-April-2024",
    end: "07-April-2024",
    status: false,
  },
  {
    id: "4",
    title: "Work on Project",
    desc: "Finish the React project and submit the final report",
    star: true,
    start: "05-April-2024",
    end: "07-April-2024",
    status: false,
  },
];

export default tasks;