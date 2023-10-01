import React from "react";

import { Typography, Stack, Box } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return "loading...";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" fontWeight="bold">
        Watch{" "}
        <span style={{ color: "#ff1625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "row" },
          gap: { lg: "50px", xs: "50px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#F7F6F6",
              borderRadius: "10px",
              border: "4px solid #F7F6F6",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ borderRadius: "10px 10px 0px 0px" }}
            />
            <Box pl={2}>
              <Typography
                fontSize={{ lg: "18px", xs: "13px" }}
                color="#000"
                fontWeight="bold"
                mb="10px"
              >
                {item.video.title}
              </Typography>
              <Typography
                fontSize={{ lg: "14px", xs: "10px" }}
                color="gray"
                fontWeight="bold"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
