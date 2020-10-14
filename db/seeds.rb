# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.create(title: 'Finding Peace and Hope', description: "Life's personal trials stretch far beyond the current COVID-19 pandemic. Enduring life's trials requires us to fill our personal storehouses with faith, truth, and testimony. When we seek to truly hear Jesus Christ, we will be guided to know what to do in any circumstance.")
section = Section.create(title: 'Hear Him', course: course)
episodes = Episode.create([
    {title: '1. Finding Peace During Turbulent Times.', description: 'lorem ipsum', url: "https://www.youtube.com/embed/2w49_1a9X0Q", section: section},
    {title: '2. God Wants You to Pray.', description: 'lorem ipsum', url: "https://www.youtube.com/embed/2w49_1a9X0Q", section: section },
    {title: '3. Choosing to Believe in God.', description: 'lorem ipsum', url: "https://www.youtube.com/embed/2w49_1a9X0Q", section: section },
    {title: '4. Why Do Bad Things Happen to Good People?', description: 'lorem ipsum', url: "https://www.youtube.com/embed/2w49_1a9X0Q", section: section }
])