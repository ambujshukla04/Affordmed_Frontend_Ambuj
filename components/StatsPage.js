import { useEffect, useState } from "react";
import { getUrls } from "../utils/urlHelper";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function StatsPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getUrls());
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        URL Statistics
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Long URL</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((u, i) => (
            <TableRow key={i}>
              <TableCell>{`http://localhost:3000/${u.shortcode}`}</TableCell>
              <TableCell>{u.longUrl}</TableCell>
              <TableCell>{new Date(u.expiry).toLocaleString()}</TableCell>
              <TableCell>{u.clicks.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

// ye sab kuchh bhi ho sakta hai bhai bas kaam chalana hai or me bimag kharab ho rha h


export default StatsPage;
