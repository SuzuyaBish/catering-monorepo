import 'package:catering_mobile/screen/blog.dart';
import 'package:catering_mobile/screen/home.dart';
import 'package:catering_mobile/screen/create_recipe.dart';
import 'package:catering_mobile/screen/contact.dart';
import 'package:flutter/material.dart';

class recipe extends StatefulWidget {
  @override
  _Recipe createState() => _Recipe();
}

class _Recipe extends State<recipe> {
  bool showBtmAppBr = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Recipes",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 55, 175, 166),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.add,
              color: Colors.black,
            ),
            onPressed: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => createRecipe())); // do something
            },
          )
        ],
      ),
      body: const SafeArea(
        child: SingleChildScrollView(
          padding: EdgeInsets.all(24.0),
          child: GridB(),
        ),
      ),
      bottomNavigationBar: AnimatedContainer(
        duration: const Duration(
          milliseconds: 800,
        ),
        curve: Curves.easeInOutSine,
        height: showBtmAppBr ? 70 : 0,
        child: BottomAppBar(
          notchMargin: 8.0,
          shape: const CircularNotchedRectangle(),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => HomePage()));
                },
                icon: const Icon(
                  Icons.home_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context)
                      .push(MaterialPageRoute(builder: (context) => recipe()));
                },
                icon: const Icon(
                  Icons.fastfood_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context)
                      .push(MaterialPageRoute(builder: (context) => blog()));
                },
                icon: const Icon(
                  Icons.message,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context)
                      .push(MaterialPageRoute(builder: (context) => contact()));
                },
                icon: const Icon(
                  Icons.contact_phone,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class GridB extends StatefulWidget {
  const GridB({Key? key}) : super(key: key);

  @override
  State<GridB> createState() => _GridBState();
}

class _GridBState extends State<GridB> {
  final List<Map<String, dynamic>> gridMap = [
    {
      "title": "Salmon Tacos",
      "description": "Flaky and flavorful fish",
      "images":
          "https://www.acouplecooks.com/wp-content/uploads/2022/02/Salmon-Tacos-010.jpg",
    },
    {
      "title": "Beef Sliders",
      "description": "Bite-sized and juicy",
      "images":
          "https://www.atablefullofjoy.com/wp-content/uploads/2018/06/Hamburger-Sliders-Featured.jpg",
    },
    {
      "title": "Mini Cheesecake",
      "description": "Sweet and decedant",
      "images":
          "https://handletheheat.com/wp-content/uploads/2016/07/No-Bake-Mini-Strawberry-Lemonade-Cheesecakes-square.jpg",
    },
    {
      "title": "Greek Chicken Breast",
      "description": "Juicy and full of flavor",
      "images":
          "https://theforkedspoon.com/wp-content/uploads/2019/06/Greek-Chicken-Marinade-7.jpg",
    },
    {
      "title": "Salmon Tacos",
      "description": "Flaky and flavorful fish",
      "images":
          "https://www.acouplecooks.com/wp-content/uploads/2022/02/Salmon-Tacos-010.jpg",
    },
    {
      "title": "Beef Sliders",
      "description": "Bite-sized and juicy",
      "images":
          "https://www.atablefullofjoy.com/wp-content/uploads/2018/06/Hamburger-Sliders-Featured.jpg",
    },
    {
      "title": "Mini Cheesecake",
      "description": "Sweet and decedant",
      "images":
          "https://handletheheat.com/wp-content/uploads/2016/07/No-Bake-Mini-Strawberry-Lemonade-Cheesecakes-square.jpg",
    },
    {
      "title": "Greek Chicken Breast",
      "description": "Juicy and full of flavor",
      "images":
          "https://theforkedspoon.com/wp-content/uploads/2019/06/Greek-Chicken-Marinade-7.jpg",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 12.0,
        mainAxisSpacing: 12.0,
        mainAxisExtent: 310,
      ),
      itemCount: gridMap.length,
      itemBuilder: (_, index) {
        return Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(
              16.0,
            ),
            color: Color.fromARGB(255, 55, 175, 166),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(16.0),
                  topRight: Radius.circular(16.0),
                ),
                child: Image.network(
                  "${gridMap.elementAt(index)['images']}",
                  height: 170,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "${gridMap.elementAt(index)['title']}",
                      style: Theme.of(context).textTheme.titleMedium!.merge(
                            const TextStyle(
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                    ),
                    const SizedBox(
                      height: 8.0,
                    ),
                    Text(
                      "${gridMap.elementAt(index)['description']}",
                      style: Theme.of(context).textTheme.titleSmall!.merge(
                            TextStyle(
                              fontWeight: FontWeight.w700,
                              color: Colors.grey.shade800,
                            ),
                          ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
