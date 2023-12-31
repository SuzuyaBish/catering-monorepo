import 'package:flutter/material.dart';

class RecipeGrid extends StatefulWidget {
  const RecipeGrid({Key? key}) : super(key: key);

  @override
  State<RecipeGrid> createState() => _RecipeGridState();
}

class _RecipeGridState extends State<RecipeGrid> {
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
  void _showDialogRecipe() {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text("Blog"),
            content: const Text("Content from Blog"),
            actions: [
              MaterialButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text("Close"),
              )
            ],
          );
        });
  }

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
            color: const Color.fromARGB(255, 55, 175, 166),
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
