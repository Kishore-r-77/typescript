//Partials

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "KHR1234",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 90 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//Required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

//Readonly

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });
