import 'dart:async';
import 'package:catering_mobile/screen/blog.dart';
import 'package:catering_mobile/screen/recipe.dart';
import 'package:catering_mobile/screen/contact.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomeState();
}

class _HomeState extends State<HomePage> {
  late final PageController pageController;
  ScrollController _scrollController = ScrollController();
  int pageNo = 0;

  Timer? carasouelTmer;

  Timer getTimer() {
    return Timer.periodic(const Duration(seconds: 3), (timer) {
      if (pageNo == 4) {
        pageNo = 0;
      }
      pageController.animateToPage(
        pageNo,
        duration: const Duration(seconds: 1),
        curve: Curves.easeInOutCirc,
      );
      pageNo++;
    });
  }

  @override
  void initState() {
    pageController = PageController(initialPage: 0, viewportFraction: 0.85);
    carasouelTmer = getTimer();
    _scrollController.addListener(() {
      if (_scrollController.position.userScrollDirection ==
          ScrollDirection.reverse) {
        showBtmAppBr = false;
        setState(() {});
      } else {
        showBtmAppBr = true;
        setState(() {});
      }
    });
    super.initState();
  }

  @override
  void dispose() {
    pageController.dispose();
    super.dispose();
  }

  void _showDialogBlog() {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text("Blog"),
            content: Text("Content from Blog"),
            actions: [
              MaterialButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text("Close"),
              )
            ],
          );
        });
  }

  bool showBtmAppBr = true;
  var selectedItem = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text(
          "The Cooked Sisters",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 55, 175, 166),
        actions: [
          PopupMenuButton(onSelected: (value) {
            setState(() {
              selectedItem = value.toString();
            });
            Navigator.pushNamed(context, value.toString());
          }, itemBuilder: (BuildContext bc) {
            return const [
              PopupMenuItem(
                child: Text("About Us"),
                value: '/about',
              ),
              PopupMenuItem(
                child: Text("Privacy Policy"),
                value: '/privacy',
              ),
              PopupMenuItem(
                child: Text("Terms and Conditions"),
                value: '/terms',
              )
            ];
          })
        ],
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          controller: _scrollController,
          child: Column(
            children: [
              const SizedBox(
                height: 36.0,
              ),
              Padding(
                padding: const EdgeInsets.all(24.0),
                child: ListTile(
                  selected: true,
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(16.0),
                    ),
                  ),
                  selectedTileColor: Color.fromARGB(255, 55, 175, 166),
                  title: Text(
                    "Welcome",
                    style: Theme.of(context).textTheme.titleMedium!.merge(
                          const TextStyle(
                            fontFamily: "Inter",
                            fontWeight: FontWeight.w700,
                            fontSize: 18.0,
                          ),
                        ),
                  ),
                  subtitle: Text(
                    "Have a look at our recipes and recent events",
                    style: Theme.of(context).textTheme.titleSmall,
                  ),
                ),
              ),
              SizedBox(
                height: 200,
                child: PageView.builder(
                  controller: pageController,
                  onPageChanged: (index) {
                    pageNo = index;
                    setState(() {});
                  },
                  itemBuilder: (_, index) {
                    return AnimatedBuilder(
                      animation: pageController,
                      builder: (ctx, child) {
                        return child!;
                      },
                      child: GestureDetector(
                        onTap: () {
                          _showDialogBlog();
                        },
                        onPanDown: (d) {
                          carasouelTmer?.cancel();
                          carasouelTmer = null;
                        },
                        onPanCancel: () {
                          carasouelTmer = getTimer();
                        },
                        child: Container(
                          margin: const EdgeInsets.only(
                              right: 8, left: 8, top: 24, bottom: 12),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(24.0),
                            color: Color.fromARGB(255, 55, 175, 166),
                          ),
                        ),
                      ),
                    );
                  },
                  itemCount: 5,
                ),
              ),
              const SizedBox(
                height: 12.0,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(
                  5,
                  (index) => GestureDetector(
                    child: Container(
                      margin: const EdgeInsets.all(2.0),
                      child: Icon(
                        Icons.circle,
                        size: 12.0,
                        color: pageNo == index
                            ? Color.fromARGB(255, 55, 175, 166)
                            : Colors.grey.shade300,
                      ),
                    ),
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.all(24.0),
                child: GridB(),
              ),
            ],
          ),
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

class PopUpMen extends StatelessWidget {
  final List<PopupMenuEntry> menuList;
  final Widget? icon;
  const PopUpMen({Key? key, required this.menuList, this.icon})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16.0),
      ),
      itemBuilder: ((context) => menuList),
      icon: icon,
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
  void _showDialogRecipe() {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text("Blog"),
            content: Text("Content from Blog"),
            actions: [
              MaterialButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text("Close"),
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
