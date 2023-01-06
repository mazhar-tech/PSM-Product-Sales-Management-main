import { COLORS } from "../assets/color";

export const STYLES = {
  inputstyle: {
    "& .MuiInputLabel-root": { color: COLORS.primary }, //styles the label
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": { borderColor: COLORS.primary },
    },
  },
};
// sx={{
//   "& .MuiInputLabel-root": {color: 'green'},//styles the label
//   "& .MuiOutlinedInput-root": {
//     "& > fieldset": { borderColor: "orange" },
//   },
// }}
