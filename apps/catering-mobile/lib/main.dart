import 'package:catering_mobile/screen/about.dart';

import 'package:catering_mobile/screen/home.dart';
import 'package:catering_mobile/screen/privacy_policy.dart';
import 'package:catering_mobile/screen/terms_and_conditions.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'catering-mobile',
        theme: ThemeData(
            textTheme: TextTheme(
              titleSmall: GoogleFonts.inter(),
              titleMedium: GoogleFonts.inter(),
              titleLarge: GoogleFonts.inter(),
              bodyLarge: GoogleFonts.inter(),
              bodyMedium: GoogleFonts.inter(),
              bodySmall: GoogleFonts.inter(),
            ),
            primarySwatch: Colors.blue,
            scaffoldBackgroundColor: Color.fromARGB(220, 245, 243, 243)),
        home: const HomePage(),
        routes: {
          '/about': (context) => about(),
          '/privacy': (context) => privacy(),
          '/terms': (context) => terms(),
        });
  }
}
