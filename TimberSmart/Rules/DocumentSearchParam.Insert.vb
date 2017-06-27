Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Text.RegularExpressions
Imports System.Web
Imports System.Web.Security
Imports TimberSmart.Data
Imports TimberSmart.Models

Namespace Rules
    
    Partial Public Class DocumentSearchParamBusinessRules
        Inherits TimberSmart.Rules.SharedBusinessRules
        
        ''' <summary>
        ''' This method will execute in any view before an action
        ''' with a command name that matches "Insert".
        ''' </summary>
        <Rule("Insert")>  _
        Public Sub InsertImplementation(ByVal instance As DocumentSearchParamModel)
            PreventDefault()
        End Sub
    End Class
End Namespace
