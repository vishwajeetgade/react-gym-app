import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const navigate = useNavigate();

  const handleDirectToExerciseDetails = () => {
    console.log(targetMuscleExercises);
    console.log(equipmentExercises);
  };

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
