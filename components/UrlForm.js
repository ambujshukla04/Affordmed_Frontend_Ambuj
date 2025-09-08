import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!url) return;
    // baad me API ya helper function connect karenge samjhe code ko padhne wale ya check karne vale
    // Dummy short URL bana rahe hain (random string ke sath)
    // Future me yahan backend API call karenge
    // agar na samjh aaye to fir se padho

    setShortUrl("https://sho.rt/" + Math.random().toString(36).substring(7));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            🚀 URL Shortener 🫡
          </Typography>
          <TextField
            label="Enter your URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleShorten}
          >
            Shorten URL
          </Button>

          {shortUrl && (
            <Box mt={3}>
              <TextField
                label="Shortened URL"
                value={shortUrl}
                fullWidth
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCopy}>
                        <ContentCopyIcon />
                      </IconButton>
                    </InputAdornment>  
                  ),
                }}
              />
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
