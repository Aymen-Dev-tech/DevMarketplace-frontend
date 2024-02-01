import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
type Prop = {
  title: string;
  total: number;
  icon: React.ReactElement;
  color: string;
};
export default function StatCard({
  title,
  total,
  icon,
}: Prop) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 3,
        flexGrow: "1",
        boxShadow: "none"
      }}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">{total}</Typography>

        <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}
