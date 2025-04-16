import { ArrowForward } from "@mui/icons-material"

const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    excerpt:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...",
    imageUrl: "https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization",
    date: "Apr 20, 2020",
    category: "SEO",
    excerpt:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque. Voluptatem enim repellendus qui voluptas in...",
    imageUrl: "https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg",
    author: {
      name: "Sarah Johnson",
      role: "SEO Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    date: "May 4, 2020",
    category: "Customer Success",
    excerpt:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrum exercitationem...",
    imageUrl: "https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg",
    author: {
      name: "Robert Chen",
      role: "Customer Experience Lead",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

const BlogList = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

const BlogCard = ({ post }) => {
  // Define colors similar to what was used in the MUI version
  const colors = {
    primary: "#3b82f6",
    primaryLight: "#dbeafe",
    accent: "accent",
    textPrimary: "#111827",
    textSecondary: "#4b5563",
  }

  return (
    <div className="max-w-md overflow-hidden rounded-lg shadow-lg bg-white">
      <img src={post.imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">·</span>
          <span className="text-primary">{post.category}</span>
        </div>

        <div className="pt-4 flex flex-col">
          <div className="mb-2">
            <span className="bg-blue-100 text-primary font-semibold px-3 py-1 rounded text-xs uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h2 className="font-bold mb-2 leading-snug text-xl text-gray-900">{post.title}</h2>

          <p className="mb-3 leading-relaxed text-gray-600 text-sm flex-grow">{post.excerpt}</p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded flex items-center self-start">
            Read More
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogList
