# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Rock.destroy_all

Rock.create([
  { name: "Matrix Opal",
    description: "Matrix Opal is a material in which precious opal is in an intimate mixture with the host rock, instead of being confined to seams and patches.",
    image: "http://media.treasurion.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/b/o/boulder_matrix_opal_blue_4_.jpg"
  },

  { name: "Maw Sit Sit",
    description: "Maw sit sit is a rock composed of jadeite, albite, and kosmochlor (a mineral related to jadeite). It is attractive, has a bright chrome-green color and accepts a bright polish, and for those reasons it is used as a gemstone.",
    image: "http://www.crystal-treasure.com/images/product_images/popup_images/mf32-133-2.jpg"
  },

  { name: "Amethyst",
    description: "Amethyst is a transparent variety of quartz that ranges from light lilac to deep purple in color. It is one of the most popular faceted gemstones and is sometimes cut en cabochon. It is found in many locations around the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Amethyst._Magaliesburg,_South_Africa.jpg"
  },

  { name: "Ocean Jasper ",
    description: "A gem material named because it is found below the high tide line of a Madagascar ocean beach. It is patterned with beautiful eyes and bands in a wide variety of colors. It also can grade from agate to jasper in a single stone.",
    image: "https://blog.etemetaphysical.com/wp-content/uploads/2015/03/oceanjasperblog010.jpg"
  },

  { name: "Onyx",
    description: "Onyx is the name given to a black chalcedony with parallel white banding or a red chalcedony with white banding. High-quality pieces are sometimes used to carve cameos.",
    image: "http://cdn3.volusion.com/qz29d.hncd6/v/vspfiles/photos/GEM-508-27-2.jpg?1467880453"
  },

])
