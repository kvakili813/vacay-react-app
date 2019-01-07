# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Place.create(place_id: 'coney-island',
                name: "Coney Island",
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Coney_Island_beach_and_amusement_parks_%28June_2016%29.jpg')
                Place.create(place_id: 'manhattan',
                name: "Manhattan",
                image_url: 'https://bobridgesgallery.com/wp-content/uploads/2017/06/Lower-Manhattan.jpg')
Place.create(place_id: 'vietnam',
                name: "Vietnam",
                image_url: 'https://cdn.tourradar.com/s3/tour/original/95481_99a760be.jpg')
Place.create(place_id: 'hawaii',
                name: "Hawaii",
                image_url: 'https://www.myhawaii.com.au/wp-content/uploads/sites/13/2018/08/Hawaii-Landscape-Copy.jpg')
Place.create(place_id: 'england',
    name: "England",
    image_url: 'http://seekadegree.com/wp-content/uploads/2018/08/england-fall-semester-abroad.jpg')
