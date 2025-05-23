import { Box, Container, Typography, Grid } from "@mui/material"
import { Construction, HomeRepairService, Architecture, Brush, VerifiedUser } from "@mui/icons-material"

const services = [
  {
    icon: Construction,
    title: "New Construction",
    description:
      "From foundation to finishing touches, we bring your vision to life with expert craftsmanship and attention to every detail. Our team handles all aspects of new construction with precision and care.",
  },
  {
    icon: HomeRepairService,
    title: "Renovations",
    description:
      "Transform your existing space with our comprehensive renovation services, tailored to your specific needs and style. We specialize in breathing new life into older properties while maintaining their character.",
  },
  {
    icon: Architecture,
    title: "Design & Planning",
    description:
      "Our expert team provides end-to-end design and planning services, ensuring your project is well-thought-out from start to finish. We handle permits, blueprints, and all necessary documentation.",
  },
  {
    icon: Brush,
    title: "Interior Finishing",
    description:
      "Elevate your space with our premium interior finishing services. From custom cabinetry to perfect paint jobs, we ensure every detail meets our high standards of quality and craftsmanship.",
  },
  {
    icon: VerifiedUser,
    title: "Quality Guarantee",
    description:
      "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction. Our quality control process ensures every project meets or exceeds industry standards.",
  },
]

function ServicesSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#2f3a4a",
        py: 8,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Construction Services
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          At Kizush Constructions, we deliver excellence in every project through our comprehensive range of
          construction services.
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={index === services.length - 1 ? 12 : 6}
              lg={index === services.length - 1 ? 12 : 6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: index === services.length - 1 ? "600px" : "500px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <service.icon sx={{ fontSize: 45, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 2,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: index === services.length - 1 ? "800px" : "400px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesSection

