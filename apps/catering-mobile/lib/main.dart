import 'package:catering_mobile/screen/index.dart';
import 'package:catering_mobile/screen/login.dart';
import 'package:catering_mobile/screen/splash.dart';
import 'package:flutter/material.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  await Supabase.initialize(
    url: 'https://rzqslwrkxnifdgwlulxv.supabase.co',
    anonKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cXNsd3JreG5pZmRnd2x1bHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NjEwOTgsImV4cCI6MjAxNjEzNzA5OH0.s8BpHTLZtkRF-PqNLydv4ISON-B2eUMs2QHeRih2SK0',
  );
  runApp(const MyApp());
}

final supabase = Supabase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'catering-mobile',
      theme: ThemeData(
        textTheme: GoogleFonts.interTextTheme(Theme.of(context).textTheme),
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: const Color.fromARGB(220, 245, 243, 243),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: <String, WidgetBuilder>{
        '/': (_) => const SplashPage(),
        '/login': (_) => const LoginPage(),
        '/account': (_) => const IndexPage(),
      },
    );
  }
}
